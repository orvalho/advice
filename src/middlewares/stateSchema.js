export default {
  "title": "Redux Store",
  "type": "object",
  "required": [
    "advice", "auth"
  ],
  "properties": {
    "advice": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "auth": {
      "type": ["boolean", "null"]
    }
  }
}
