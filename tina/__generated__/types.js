export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const AboutPartsFragmentDoc = gql`
    fragment AboutParts on About {
  __typename
  title
  seo_title
  slug
  description
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  seo_title
  summary
  description
  slug
  image
  date
  author
  tags
  categories
  body
}
    `;
export const ProjetsPartsFragmentDoc = gql`
    fragment ProjetsParts on Projets {
  __typename
  title
  seo_title
  summary
  description
  slug
  image
  date
  author
  project_types
  tech_stack
  body
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  title
  seo_title
  description
}
    `;
export const JdbPartsFragmentDoc = gql`
    fragment JdbParts on Jdb {
  __typename
  title
  seo_title
  description
  body
}
    `;
export const CreateursPartsFragmentDoc = gql`
    fragment CreateursParts on Createurs {
  __typename
  title
  seo_title
  summary
  slug
  feature_image
  body
}
    `;
export const JeuxPartsFragmentDoc = gql`
    fragment JeuxParts on Jeux {
  __typename
  title
  seo_title
  summary
  description
  slug
  feature_image
  date
  tags
  body
}
    `;
export const AboutDocument = gql`
    query about($relativePath: String!) {
  about(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AboutParts
  }
}
    ${AboutPartsFragmentDoc}`;
export const AboutConnectionDocument = gql`
    query aboutConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutFilter) {
  aboutConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AboutParts
      }
    }
  }
}
    ${AboutPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const ProjetsDocument = gql`
    query projets($relativePath: String!) {
  projets(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProjetsParts
  }
}
    ${ProjetsPartsFragmentDoc}`;
export const ProjetsConnectionDocument = gql`
    query projetsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProjetsFilter) {
  projetsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProjetsParts
      }
    }
  }
}
    ${ProjetsPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const JdbDocument = gql`
    query jdb($relativePath: String!) {
  jdb(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...JdbParts
  }
}
    ${JdbPartsFragmentDoc}`;
export const JdbConnectionDocument = gql`
    query jdbConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: JdbFilter) {
  jdbConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...JdbParts
      }
    }
  }
}
    ${JdbPartsFragmentDoc}`;
export const CreateursDocument = gql`
    query createurs($relativePath: String!) {
  createurs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CreateursParts
  }
}
    ${CreateursPartsFragmentDoc}`;
export const CreateursConnectionDocument = gql`
    query createursConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CreateursFilter) {
  createursConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CreateursParts
      }
    }
  }
}
    ${CreateursPartsFragmentDoc}`;
export const JeuxDocument = gql`
    query jeux($relativePath: String!) {
  jeux(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...JeuxParts
  }
}
    ${JeuxPartsFragmentDoc}`;
export const JeuxConnectionDocument = gql`
    query jeuxConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: JeuxFilter) {
  jeuxConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...JeuxParts
      }
    }
  }
}
    ${JeuxPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    about(variables, options) {
      return requester(AboutDocument, variables, options);
    },
    aboutConnection(variables, options) {
      return requester(AboutConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    projets(variables, options) {
      return requester(ProjetsDocument, variables, options);
    },
    projetsConnection(variables, options) {
      return requester(ProjetsConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    jdb(variables, options) {
      return requester(JdbDocument, variables, options);
    },
    jdbConnection(variables, options) {
      return requester(JdbConnectionDocument, variables, options);
    },
    createurs(variables, options) {
      return requester(CreateursDocument, variables, options);
    },
    createursConnection(variables, options) {
      return requester(CreateursConnectionDocument, variables, options);
    },
    jeux(variables, options) {
      return requester(JeuxDocument, variables, options);
    },
    jeuxConnection(variables, options) {
      return requester(JeuxConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client, options) => {
  const requester = async (doc, vars, options2) => {
    let url = client.apiUrl;
    if (options2?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options2.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client, options) => {
  const requester = generateRequester(client, options);
  return getSdk(requester);
};
