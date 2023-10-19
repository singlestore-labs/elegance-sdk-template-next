import { createEleganceClient } from "@singlestore/elegance-sdk";

export const eleganceClient = createEleganceClient("kai", { baseURL: "http://localhost:3000/api" });
