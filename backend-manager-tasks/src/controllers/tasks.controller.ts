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
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { TasksService } from 'src/services/tasks.service';

/**
 * Controlador de tareas y se crea la ruta para acceder a la api de tareas en general
 */
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  /**
   * Metodo para obtener todas las tareas
   * @param search
   * @param tag
   * @returns
   */
  @Get()
  finAll(@Query('search') search?: string, @Query('tag') tag?: string) {
    return this.taskService.findAll(search, tag);
  }

  /**
   * Metodo para obtener una tarea por id
   * @param id
   * @returns
   */
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

  /**
   * Metodo para crear una tarea, se recibe el body con los datos de la tarea
   * @param body
   * @returns
   */
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

  /**
   * Metodo para eliminar una tarea por id
   * @param id
   * @returns
   */
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

  /**
   * Metodo para actualizar una tarea por id
   * @param id
   * @param body
   * @returns
   */
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
