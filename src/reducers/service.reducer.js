const initialServiceState = {
  service: null,
  loading: false,
  error: null,
  successful: false,
  displayLogs: false
};
export function service(state = initialServiceState, action) {
  return state;
}
