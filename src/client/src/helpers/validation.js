export const validateAddContact = (state, setState) => {
  const error = [];
  const data = {};
  setState({ error: null });
  const { contact_title, contact_value, contact_picture } = state;

  // title
  if (contact_title.trim().length === 0)
    error.push("Title field cant be empty");
  else data.contact_title = contact_title.trim();

  // value
  if (contact_value.trim().length === 0)
    error.push("Value field cant be empty");
  else data.contact_value = contact_value.trim();

  // picture
  if (!contact_picture) error.push("Picture is required");
  else if (!contact_picture instanceof File) error.push("Invalid picture");
  else if (contact_picture && contact_picture.size > 1000000)
    error.push("Picture must be less then 1MB");
  else data.contact_picture = contact_picture;

  if (error.length > 0) setState({ error: error.join(", ") });
  return { isErr: error.length > 0, data };
};
