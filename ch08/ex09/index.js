export function withResource(resource, action) {
  try {
    action(resource);
  } finally {
    resource.close();
  }
}
