import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { TasksService } from 'src/services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  finAll() {
    return this.taskService.finAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const task = await this.taskService.findOne(id);
      if (!task) throw new NotFoundException('Tarea no encontrada');
      return task;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Tarea no encontrada');
    }
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.taskService.create(body);
    } catch (error: any) {
      if (
        error instanceof Error &&
        'code' in error &&
        (error as { code: number }).code === 11000
      ) {
        throw new ConflictException('La tarea con el mismo titulo ya existe');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    try {
      const task = await this.taskService.delete(id);
      if (!task) throw new NotFoundException('Tarea no encontrada');
      return { status: 200, menssage: 'Tarea eliminada', succes: true, task };
    } catch (error) {
      if (error) {
        throw new NotFoundException('Tarea no encontrada');
      }
      console.log(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    try {
      const task = await this.taskService.update(id, body);
      if (!task) throw new NotFoundException('Tarea no encontrada');
      return task;
    } catch (error) {
      if (error) {
        throw new NotFoundException('Tarea no encontrada');
      }
      console.log(error);
    }
  }
}
