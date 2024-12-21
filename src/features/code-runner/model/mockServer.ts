import { createServer, Response } from "miragejs";

const success = { status: "success", output: "Hello, world!\n" };

export function startMockServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.post("/execute", (_, request) => {
        const { language, code } = JSON.parse(request.requestBody);

        if (language === "javascript" && code === 'fmt.Println("Hello, world!")') {
          return success;
        } else if (language === "python" && code === `print("hello, world!")`) {
          return success;
        } else {
          return new Response(
            400,
            { "Content-Type": "application/json" },
            {
              status: "error",
              error: "SyntaxError: Unexpected token",
            }
          );
        }
      });
    },
  });
}
