d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });

d3.select("#delete-notes")
  .on('click', function(){
    // d3.event.preventDefault();
    // The below code will delete the entire notes div and we wont be able to add anymore notes later
    // d3.selectAll("#notes")
    //   .remove();
    d3.selectAll(".note")
      .remove();
  });

  d3.select("#lucky")
    .on("click", function(){
      d3.event.preventDefault();
      d3.selectAll("#notes")
        .style("font-size", function(){
          return Math.random()*10 + "px";
        });
    });

  d3.select("input")
    .on("input", function(){
      var currentText = d3.select(this).property("value");
      d3.select(".preview")
        .classed("hide", currentText === "")
        .text(currentText);
    })
