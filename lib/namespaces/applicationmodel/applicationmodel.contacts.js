/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.contacts
  name: "windows.applicationmodel.contacts",
  externalReference: [
    "Windows.Foundation",
    "Windows.UI.ViewManagement",
    "Windows.System",
    "Windows.Storage.Streams",
    "Windows.UI.Popups",
  ]
};

export const {
  ContactSelectionMode,
  ContactChangeType,
  ContactQueryDesiredFields,
  ContactQuerySearchFields,
  ContactQuerySearchScope,
  ContactStoreAccessType,
  ContactAnnotationStoreAccessType,
  ContactListOtherAppReadAccess,
  ContactListOtherAppWriteAccess,
  ContactMatchReasonKind,
  ContactBatchStatus,
  ContactAnnotationOperations,
  ContactNameOrder,
  ContactListSyncStatus,
  ContactCardHeaderKind,
  ContactCardTabKind,
  ContactFieldType,
  ContactEmailKind,
  ContactPhoneKind,
  ContactAddressKind,
  ContactDateKind,
  ContactRelationship,
  ContactFieldCategory,
  PinnedContactSurface,
  ContactCardDelayedDataLoader,
  ContactStore,
  ContactAnnotationStore,
  ContactCardOptions,
  FullContactCardOptions,
  ContactManagerForUser,
  ContactAnnotation,
  ContactAnnotationList,
  ContactChangeTracker,
  ContactChangedEventArgs,
  AggregateContactManager,
  ContactList,
  ContactReader,
  ContactQueryOptions,
  ContactListSyncManager,
  ContactListSyncConstraints,
  ContactListLimitedWriteOperations,
  ContactChangedDeferral,
  ContactChange,
  ContactChangeReader,
  ContactBatch,
  ContactMatchReason,
  ContactQueryTextSearch,
  ContactStoreNotificationTriggerDetails,
  ContactManager,
  ContactLaunchActionVerbs,
  ContactGroup,
  ContactPicker,
  IContactField,
  ContactPhone,
  ContactEmail,
  ContactAddress,
  ContactConnectedServiceAccount,
  ContactDate,
  ContactJobInfo,
  ContactSignificantOther,
  ContactWebsite,
  Contact,
  ContactField,
  ContactLocationField,
  ContactInstantMessageField,
  KnownContactField,
  ContactInformation,
  IContactFieldFactory,
  IContactLocationFieldFactory,
  IContactInstantMessageFieldFactory,
  ContactFieldFactory,
  PinnedContactIdsQueryResult,
  PinnedContactManager,
  ContactPanelLaunchFullAppRequestedEventArgs,
  ContactPanelClosingEventArgs,
  ContactPanel,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dataprovider from "./applicationmodel.contacts.dataprovider.js";
export * as provider from "./applicationmodel.contacts.provider.js";