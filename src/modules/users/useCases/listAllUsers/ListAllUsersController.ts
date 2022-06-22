import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers

      const list = this.listAllUsersUseCase.execute({ user_id: user_id as string })

      return response.json(list)

    } catch (e) {
      return response.status(400).json({ error: e.message })
    }
  }
}

export { ListAllUsersController };
