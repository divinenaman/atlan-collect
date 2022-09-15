const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionResponseType = {
  responseType: {
    type: "string",
    enum: ["text", "multiple-choice"],
    default: "text",
  },

  multiSelect: {
    type: "bool",
    default: false,
  },

  uiElement: {
    type: "string",
    enum: ["dropdown", "checkbox", "radio", "none"],
    default: "radio",
  },

  options: [
    {
      text: "string",
      userInputRequired: {
        type: "bool",
        default: false,
      },
    },
  ],

  longText: {
    type: "bool",
    default: "false",
  },
};

const formsSchema = {
  title: {
    type: "string",
    require: true,
  },

  organization: {
    type: Schema.Types.ObjectId,
    ref: "organization",
  },

  visibility: {
    type: "string",
    enum: ["public", "private"],
    default: "private",
  },

  users: [
    {
      userid: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      role: {
        type: "string",
        enum: ["member", "editor"],
        default: "member",
      },
    },
  ],

  questions: [
    {
      text: {
        type: "string",
        require: true,
      },

      responseType: questionResponseType,
    },
  ],
};
