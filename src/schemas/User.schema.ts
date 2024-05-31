import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserSettings } from './UserSettings.schema';
import { Post } from './Post.schema';

// Définition du type UserDocument
export type UserDocument = User & Document;

// Définition de la classe User
@Schema()
export class User {
  @Prop({ unique: true, required: true })
  public username: string;

  @Prop({ required: false })
  public displayName?: string;

  @Prop({ required: false })
  public avatarUrl?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
  public settings?: UserSettings;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  public posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
