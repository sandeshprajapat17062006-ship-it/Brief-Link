import urlModel from "../models/url.model.js";
import { generateCode } from "../util/generateCode.js";

export const getURL = async (req, res) => {
  try {
    const { url, customAlias } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "Please enter the URL",
      });
    }

    if (
      url.startsWith("http://") == false &&
      url.startsWith("https://") == false
    ) {
      return res.status(400).json({
        error: "Please enter a valid URL starting with http:// or https://",
      });
    }

    if (url.length > 2048) {
      return res.status(400).json({
        error: "URL is too long",
      });
    }

    // const code = customAlias|| generateCode();

    let code;

    if (customAlias?.trim()) {
      if (!/^[a-zA-Z0-9_-]{3,30}$/.test(customAlias)) {
        return res.status(400).json({
          message:
            "Alias must be 3-30 characters and contain only letters, numbers, hyphens or underscores",
        });
      }
      code = customAlias;

      const exist = await urlModel.findOne({
        shortCode: code,
      });

      if (exist) {
        return res.status(409).json({
          message: "This custom alias already exist please enter new one ",
        });
      }
    } else {
      code = generateCode();
    }

    const newURL = await urlModel.create({
      original_URL: url,
      shortCode: code,
    });

    return res.status(201).json({
      message: "URL shortened successfully",
      data: {
        original_URL: newURL.original_URL,
        shortCode: newURL.shortCode,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "This short code already exist",
      });
    }
    console.log(error)
    return res.status(500).json({
      message:"Failed to short URL"
    })
  }
};

export const getAllUrl = async (req, res) => {
  const urls = await urlModel.find();

  return res.status(200).json({
    message: "URLs featched successfully",
    data: {
      urls,
    },
  });
};

export const dltUrl = async (req, res) => {
  const { id } = req.params;

  const url = await urlModel.findById(id);

  if (!url) {
    return res.status(404).json({
      message: "URL not found",
    });
  }

  await urlModel.findByIdAndDelete(id);

  return res.status(200).json({
    message: "URL deleated successfully",
  });
};
