import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;

  @Prop({
    default: [],
  })
  tags: {
    id: string;
    name: string;
    colorTag: string;
  }[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
