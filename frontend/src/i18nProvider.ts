//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    User: {
      name: 'User',
      fields: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
        profilePicture: 'Profile Picture',
        id: 'id',
      },
    },
    Post: {
      name: 'Post',
      fields: {
        title: 'Title',
        content: 'Content',
        subject: 'Subject',
        author: 'Author',
        postDate: 'Post Date',
        id: 'id',
      },
    },
    Message: {
      name: 'Message',
      fields: {
        sender: 'Sender',
        receiver: 'Receiver',
        messageContent: 'Message Content',
        subject: 'Subject',
        timestamp: 'Timestamp',
        id: 'id',
      },
    },
    VideoCall: {
      name: 'Video Call',
      fields: {
        callID: 'Call Id',
        participants: 'Participants',
        startTime: 'Start Time',
        endTime: 'End Time',
        callTitle: 'Call Title',
        callStatus: 'Call Status',
        id: 'id',
      },
    },
    AudioCall: {
      name: 'Audio Call',
      fields: {
        callID: 'Call Id',
        participants: 'Participants',
        startTime: 'Start Time',
        endTime: 'End Time',
        callTitle: 'Call Title',
        callStatus: 'Call Status',
        id: 'id',
      },
    },
    Group: {
      name: 'Group',
      fields: {
        groupID: 'Group Id',
        groupName: 'Group Name',
        members: 'Members',
        groupDescription: 'Group Description',
        creationDate: 'Creation Date',
        groupAdmin: 'Group Admin',
        id: 'id',
      },
    },
    NoticeBoard: {
      name: 'Notice Board',
      fields: {
        noticeID: 'Notice Id',
        title: 'Title',
        content: 'Content',
        author: 'Author',
        targetAudience: 'Target Audience',
        publicationDate: 'Publication Date',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    User: {
      name: 'User (fr)',
      fields: {
        name: 'Name (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        profilePicture: 'Profile Picture (fr)',
        id: 'id',
      },
    },
    Post: {
      name: 'Post (fr)',
      fields: {
        title: 'Title (fr)',
        content: 'Content (fr)',
        subject: 'Subject (fr)',
        author: 'Author (fr)',
        postDate: 'Post Date (fr)',
        id: 'id',
      },
    },
    Message: {
      name: 'Message (fr)',
      fields: {
        sender: 'Sender (fr)',
        receiver: 'Receiver (fr)',
        messageContent: 'Message Content (fr)',
        subject: 'Subject (fr)',
        timestamp: 'Timestamp (fr)',
        id: 'id',
      },
    },
    VideoCall: {
      name: 'Video Call (fr)',
      fields: {
        callID: 'Call Id (fr)',
        participants: 'Participants (fr)',
        startTime: 'Start Time (fr)',
        endTime: 'End Time (fr)',
        callTitle: 'Call Title (fr)',
        callStatus: 'Call Status (fr)',
        id: 'id',
      },
    },
    AudioCall: {
      name: 'Audio Call (fr)',
      fields: {
        callID: 'Call Id (fr)',
        participants: 'Participants (fr)',
        startTime: 'Start Time (fr)',
        endTime: 'End Time (fr)',
        callTitle: 'Call Title (fr)',
        callStatus: 'Call Status (fr)',
        id: 'id',
      },
    },
    Group: {
      name: 'Group (fr)',
      fields: {
        groupID: 'Group Id (fr)',
        groupName: 'Group Name (fr)',
        members: 'Members (fr)',
        groupDescription: 'Group Description (fr)',
        creationDate: 'Creation Date (fr)',
        groupAdmin: 'Group Admin (fr)',
        id: 'id',
      },
    },
    NoticeBoard: {
      name: 'Notice Board (fr)',
      fields: {
        noticeID: 'Notice Id (fr)',
        title: 'Title (fr)',
        content: 'Content (fr)',
        author: 'Author (fr)',
        targetAudience: 'Target Audience (fr)',
        publicationDate: 'Publication Date (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
