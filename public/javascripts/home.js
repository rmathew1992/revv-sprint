$(function(){
	$(document).ready(function() {
    console.log("ready");

    $("#newtask").click(function(event){
      console.log("Add new task")
      event.preventDefault(); // cancel default behavior
      // append task and duration inputs at end of task div
        $("<h4>Task</h4>")
         .appendTo(".task");

        $("<input type='text' value='' />")
         .attr("name", "Task")
         .appendTo(".task");

        $("<h4>Duration (in days)</h4>")
         .appendTo(".task");

        $("<input type='text' value='' />")
         .attr("name", "Duration")

         .appendTo(".task");
      });
     $("#newtask2").click(function(event){
      console.log("Add new task")
      event.preventDefault(); // cancel default behavior
      // append task and duration inputs at end of task div
        $("<h4>Task</h4>")
         .appendTo(".task");

        $("<input type='text' value='' />")
         .attr("name", "Task")
         .appendTo(".task");

        $("<h4>Duration</h4>")
         .appendTo(".task");

        $("<input type='text' value='' />")
         .attr("name", "Duration")
         
         .appendTo(".task");
      });
});})