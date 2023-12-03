import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Team, TeamSchema } from "./entity/team";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
})
export class TeamModule {}
