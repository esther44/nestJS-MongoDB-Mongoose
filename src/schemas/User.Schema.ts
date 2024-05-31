import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

// Définition du type UserDocument
export type UserDocument = User & Document;

// Définition de la classe User
@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  public username: string;

  @Prop()
  public displayName: string;

  @Prop()
  public avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
