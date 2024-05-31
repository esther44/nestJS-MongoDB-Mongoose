import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserSettings {
  @Prop({ required: false })
  public receiveNotifications?: boolean;

  @Prop({ required: false })
  public receiveEmails?: boolean;

  @Prop({ required: false })
  public receiveSMS?: boolean;
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);
