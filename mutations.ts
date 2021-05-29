/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createEventType = /* GraphQL */ `
  mutation CreateEventType(
    $input: CreateEventTypeInput!
    $condition: ModelEventTypeConditionInput
  ) {
    createEventType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateEventType = /* GraphQL */ `
  mutation UpdateEventType(
    $input: UpdateEventTypeInput!
    $condition: ModelEventTypeConditionInput
  ) {
    updateEventType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventType = /* GraphQL */ `
  mutation DeleteEventType(
    $input: DeleteEventTypeInput!
    $condition: ModelEventTypeConditionInput
  ) {
    deleteEventType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createOrganizer = /* GraphQL */ `
  mutation CreateOrganizer(
    $input: CreateOrganizerInput!
    $condition: ModelOrganizerConditionInput
  ) {
    createOrganizer(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganizer = /* GraphQL */ `
  mutation UpdateOrganizer(
    $input: UpdateOrganizerInput!
    $condition: ModelOrganizerConditionInput
  ) {
    updateOrganizer(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganizer = /* GraphQL */ `
  mutation DeleteOrganizer(
    $input: DeleteOrganizerInput!
    $condition: ModelOrganizerConditionInput
  ) {
    deleteOrganizer(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createStatus = /* GraphQL */ `
  mutation CreateStatus(
    $input: CreateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    createStatus(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateStatus = /* GraphQL */ `
  mutation UpdateStatus(
    $input: UpdateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    updateStatus(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteStatus = /* GraphQL */ `
  mutation DeleteStatus(
    $input: DeleteStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    deleteStatus(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createStream = /* GraphQL */ `
  mutation CreateStream(
    $input: CreateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    createStream(input: $input, condition: $condition) {
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
export const updateStream = /* GraphQL */ `
  mutation UpdateStream(
    $input: UpdateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    updateStream(input: $input, condition: $condition) {
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
export const deleteStream = /* GraphQL */ `
  mutation DeleteStream(
    $input: DeleteStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    deleteStream(input: $input, condition: $condition) {
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
