import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('events')
  handleMessage(@MessageBody() data: string): void {
    this.server.emit('events', data);
  }
}