import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Team, TeamSchema } from "./entity/team";
import { TeamService } from './team.service';
import { TeamController } from './team.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
