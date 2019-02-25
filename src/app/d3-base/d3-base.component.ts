import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-base',
  templateUrl: './d3-base.component.html',
  styleUrls: ['./d3-base.component.scss']
})
export class D3BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let width = 700, height = 350, margin = {left:25, top:15, right:20,bottom:20},
        g_width = width - margin.left - margin.right,
        g_height = height - margin.top - margin.bottom;

    //获取div，向里面添加svg
    let svg = d3.select("#container")
    .append("svg:svg")
    .attr("width", width)
    .attr("height", height)

    let g = d3.select("svg")
    .append("g")
    .attr("transform","translate("+margin.left+","+margin.top+")");

    let data = [1,3,5,13,4,2,9,6];

    let scale_x = d3.scaleLinear()
    .domain([0, data.length-1])
    .range([0, g_width]);
    let scale_y = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, g_height]);


    let line_generator = d3.line()
    .curve(d3.curveBasis)
    .x(function(d,i){return scale_x(i);})
    .y(function(d){return scale_y(d);})

    /*
    d3.select("g")
    .append("path")
    .attr("d", line_generator(data))
    */

    d3.select("g")
    .append("path")
    .attr("d", line_generator(data))
    .attr("fill","none")
    .attr("stroke",0)
    .attr("stroke-width",2)
    .attr("stroke","green")
    .attr("class","line");

  }

}
