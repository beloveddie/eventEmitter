const { v4: uuid } = require("uuid");
const { formatRelative, subDays } = require("date-fns");

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${formatRelative(subDays(new Date(), 3), new Date())}`;
  const id = uuid();
  const logItem = `\n### **Log-${id}**\n\n- Date/Time: ${dateTime}\n- ID: ${id}\n- Message: ${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.md"),
      logItem
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
