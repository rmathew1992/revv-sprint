$(function(){
	$(document).ready(function() {
    $("#submittask").hide();
		$("#newtask").click(function(event){
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
        $("#submittask").show();
        $("#newtask").hide();

     	});
	});
});