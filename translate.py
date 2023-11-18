import os
import requests
import re

# Function to create a directory structure in the destination directory
def create_directory_structure(source_dir, dest_dir):
    for root, dirs, files in os.walk(source_dir):
        for dir_name in dirs:
            source_path = os.path.join(root, dir_name)
            dest_path = source_path.replace(source_dir, dest_dir)
            if not os.path.exists(dest_path):
                os.makedirs(dest_path)

# Function to translate a file using DeepL API
def translate_file(file_path, target_language='EN', auth_key='81580059-dfcc-8cdb-48ac-fe80c6e11baa:fx'):
    translated_file_path = file_path.replace(source_directory, target_directory)
    if os.path.exists(translated_file_path):
        print(f"File '{file_path}' already translated. Skipping...")
        with open(translated_file_path, 'r', encoding='utf-8') as translated_file:
            return translated_file.read()
        
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

        # Find the front-matter delimiter '---'
        front_matter_delimiter = '---\n'
        front_matter_end = content.find(front_matter_delimiter)
        front_matter = ""
        if front_matter_end != -1:
            front_matter_end = content.find(front_matter_delimiter, front_matter_end + len(front_matter_delimiter))
            if front_matter_end != -1:
                front_matter = content[:front_matter_end + len(front_matter_delimiter)]
                content = content[front_matter_end + len(front_matter_delimiter):]
        
        summary_regex = r'summary:\s*\"(.*?)\"'
        description_regex = r'description:\s*\"(.*?)\"'

        def translate_field(field_value):
            translated_value = translate_text(field_value, target_language, auth_key)
            return f'"{translated_value}"' if translated_value else '""'

        if re.search(summary_regex, front_matter, re.IGNORECASE):
            translated_summary = translate_field(re.search(summary_regex, front_matter, re.IGNORECASE).group(1))
            front_matter = re.sub(summary_regex, f'summary: {translated_summary}', front_matter, flags=re.IGNORECASE)

        if re.search(description_regex, front_matter, re.IGNORECASE):
            translated_description = translate_field(re.search(description_regex, front_matter, re.IGNORECASE).group(1))
            front_matter = re.sub(description_regex, f'description: {translated_description}', front_matter, flags=re.IGNORECASE)

        # Translate the content using DeepL API
        url = "https://api-free.deepl.com/v2/translate"
        params = {
            'auth_key': auth_key,
            'text': content,
            'target_lang': target_language
        }
        headers = {
            'Authorization': f'DeepL-Auth-Key {auth_key}'
        }
        response = requests.post(url, data=params, headers=headers)

        if response.status_code == 200:
            translated_content = response.json()['translations'][0]['text']
            return front_matter + translated_content
        else:
            print(f"Translation failed for file: {file_path} with status code: {response.status_code}")
            return None
        
        # Function to duplicate .png files
def duplicate_png_files(source_dir, dest_dir):
    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.endswith('.png'):
                source_file_path = os.path.join(root, file)
                dest_file_path = source_file_path.replace(source_dir, dest_dir)
                dest_file_path = os.path.join(dest_file_path, file)
                with open(source_file_path, 'rb') as src, open(dest_file_path, 'wb') as dst:
                    dst.write(src.read())
                print(f"Copié '{source_file_path}' vers '{dest_file_path}'")

# Function to translate all files in a directory and duplicate the structure
def translate_and_duplicate_directory(source_dir, dest_dir, target_language='EN',auth_key='81580059-dfcc-8cdb-48ac-fe80c6e11baa:fx'):
    create_directory_structure(source_dir, dest_dir)
    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.endswith('.md'):
                source_file_path = os.path.join(root, file)
                dest_file_path = source_file_path.replace(source_dir, dest_dir)
                translated_content = translate_file(source_file_path, target_language, auth_key)
                with open(dest_file_path, 'w', encoding='utf-8') as translated_file:
                    translated_file.write(translated_content)
                print(f"Taduction de '{source_file_path}' en '{target_language}' et sauvegardé sur '{dest_file_path}'")


if __name__ == "__main__":
    # Specify the source directory to duplicate
    source_directory = 'content/fr'

    # Specify the target directory to create with translated content
    target_directory = 'content/en'

    # DeepL API authentication details
    deepl_auth_key = '81580059-dfcc-8cdb-48ac-fe80c6e11baa:fx'
    # Translate content and duplicate directory structure
    translate_and_duplicate_directory(source_directory, target_directory, target_language='EN', auth_key=deepl_auth_key)

    # Duplicate .png files
    duplicate_png_files(source_directory, target_directory)