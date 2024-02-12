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
    "Windows.Storage.Streams",
    "Windows.System",
    "Windows.UI.Popups",
    "Windows.UI.ViewManagement",
  ]
};

export const {
  ContactAddressKind,
  ContactAnnotationOperations,
  ContactAnnotationStoreAccessType,
  ContactBatchStatus,
  ContactCardHeaderKind,
  ContactCardTabKind,
  ContactChangeType,
  ContactDateKind,
  ContactEmailKind,
  ContactFieldCategory,
  ContactFieldType,
  ContactListOtherAppReadAccess,
  ContactListOtherAppWriteAccess,
  ContactListSyncStatus,
  ContactMatchReasonKind,
  ContactNameOrder,
  ContactPhoneKind,
  ContactQueryDesiredFields,
  ContactQuerySearchFields,
  ContactQuerySearchScope,
  ContactRelationship,
  ContactSelectionMode,
  ContactStoreAccessType,
  PinnedContactSurface,
  AggregateContactManager,
  Contact,
  ContactAddress,
  ContactAnnotation,
  ContactAnnotationList,
  ContactAnnotationStore,
  ContactBatch,
  ContactCardDelayedDataLoader,
  ContactCardOptions,
  ContactChange,
  ContactChangeReader,
  ContactChangeTracker,
  ContactChangedDeferral,
  ContactChangedEventArgs,
  ContactConnectedServiceAccount,
  ContactDate,
  ContactEmail,
  ContactField,
  ContactFieldFactory,
  ContactGroup,
  ContactInformation,
  ContactInstantMessageField,
  ContactJobInfo,
  ContactLaunchActionVerbs,
  ContactList,
  ContactListLimitedWriteOperations,
  ContactListSyncConstraints,
  ContactListSyncManager,
  ContactLocationField,
  ContactManager,
  ContactManagerForUser,
  ContactMatchReason,
  ContactPanel,
  ContactPanelClosingEventArgs,
  ContactPanelLaunchFullAppRequestedEventArgs,
  ContactPhone,
  ContactPicker,
  ContactQueryOptions,
  ContactQueryTextSearch,
  ContactReader,
  ContactSignificantOther,
  ContactStore,
  ContactStoreNotificationTriggerDetails,
  ContactWebsite,
  FullContactCardOptions,
  IContactField,
  IContactFieldFactory,
  IContactInstantMessageFieldFactory,
  IContactLocationFieldFactory,
  KnownContactField,
  PinnedContactIdsQueryResult,
  PinnedContactManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dataprovider from "./applicationmodel.contacts.dataprovider.js";
export * as provider from "./applicationmodel.contacts.provider.js";