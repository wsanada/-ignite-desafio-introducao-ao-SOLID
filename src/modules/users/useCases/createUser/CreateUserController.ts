import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body

      const item = this.createUserUseCase.execute({ name, email })

      return response.status(201).json(item)

    } catch (e) {
      return response.status(400).json({ error: e.message })
    }
  }
}

export { CreateUserController };
