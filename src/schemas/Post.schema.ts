import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './User.schema';
import mongoose from 'mongoose';

@Schema()
export class Post {
  @Prop({ required: true })
  public title: string;

  @Prop({ required: true })
  public content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  public user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
