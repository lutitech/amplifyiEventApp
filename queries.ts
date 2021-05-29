/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      description
      type {
        id
        name
        createdAt
        updatedAt
      }
      Status {
        id
        name
        createdAt
        updatedAt
      }
      location
      Date
      category {
        id
        name
        createdAt
        updatedAt
      }
      organizer {
        id
        name
        createdAt
        updatedAt
      }
      stream {
        id
        title
        description
        country
        city
        streamUrl
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        type {
          id
          name
          createdAt
          updatedAt
        }
        Status {
          id
          name
          createdAt
          updatedAt
        }
        location
        Date
        category {
          id
          name
          createdAt
          updatedAt
        }
        organizer {
          id
          name
          createdAt
          updatedAt
        }
        stream {
          id
          title
          description
          country
          city
          streamUrl
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventType = /* GraphQL */ `
  query GetEventType($id: ID!) {
    getEventType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listEventTypes = /* GraphQL */ `
  query ListEventTypes(
    $filter: ModelEventTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganizer = /* GraphQL */ `
  query GetOrganizer($id: ID!) {
    getOrganizer(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizers = /* GraphQL */ `
  query ListOrganizers(
    $filter: ModelOrganizerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStatus = /* GraphQL */ `
  query GetStatus($id: ID!) {
    getStatus(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listStatuss = /* GraphQL */ `
  query ListStatuss(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStream = /* GraphQL */ `
  query GetStream($id: ID!) {
    getStream(id: $id) {
      id
      title
      description
      country
      city
      streamUrl
      createdAt
      updatedAt
    }
  }
`;
export const listStreams = /* GraphQL */ `
  query ListStreams(
    $filter: ModelStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        country
        city
        streamUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
