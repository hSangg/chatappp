import { toast } from "react-toastify"

export const Toast = {
  success: (message) => toast.success(message, { icon: "🌌" }),
  error: (message) => toast.error(message, { icon: "🙏" }),
}
