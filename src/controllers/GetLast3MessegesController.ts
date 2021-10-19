import { Request, Response } from "express";
import { GetLast3MessegesService } from "../services/GetLast3MessagesService";

class GetLast3MessegesController {
    async handle(request: Request, response: Response) {

        const service = new GetLast3MessegesService();

        const result = await service.execute();

        return response.json(result);

    }
}

export {GetLast3MessegesController}