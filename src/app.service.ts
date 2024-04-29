import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "게시판에 오신 것을 환영합니다!";
  }
}
