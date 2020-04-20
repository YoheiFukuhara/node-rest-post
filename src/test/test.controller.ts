import { Controller, Post, Body } from '@nestjs/common';
import { RequestBodyDTO } from './test.dto';

@Controller('test')
export class TestController {

    @Post()
    async createLeaveRequest(@Body() requestBodyDTO: RequestBodyDTO) {

        // リクエストBodyの内容をログ出力
        console.log(requestBodyDTO);
        console.log('entitySample: ' + requestBodyDTO.conversation.memory.entitySample.raw);

        return requestBodyDTO;
    }
}