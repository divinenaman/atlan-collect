const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const responseSchema = {
  formId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "forms",
  },

  userId: { type: Schema.Types.ObjectId, ref: "users" },

  response: [
    {
      questionId: {
        type: Schema.Types.ObjectId,
      },

      response: [
        {
          optionId: Schema.Types.ObjectId,

          userInput: {
            type: String,
          },
        },
      ],
    },
  ],
};
