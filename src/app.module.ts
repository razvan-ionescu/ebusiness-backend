import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { StoreModule } from "./store/store.module";

@Module({
  imports: [AuthModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
