import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service';
import { Cars } from './cars.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly CarService: CarService) {}

  @Get()
  findAll(): Promise<Cars[]> {
    return this.CarService.findAll();
  }

  @Get("/:id")
  findOne(@Param() param): Promise<Cars> {
    return this.CarService.findOne(param.id);
  }
}
