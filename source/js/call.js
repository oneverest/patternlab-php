$(document).ready(() => {
  $("#dialpad-activator").popup({
    popup: "#dialpad",
    on: 'click'
  });

  $(".shape").shape({
    duration: 10
  });

  $("table.activecall > tbody > tr").popup({
    hoverable: true
  });

  $("table").tablesort();

  $(".main.segment > .menu .item").tab();
  
  $("#dialpad .hangup.button").click(() => {
    $('.shape').shape('flip back');
  });

  $("#dialpad .dial.button").click(() => {
    $('.shape').shape('flip over');
  });

  $("#dialpad .buttons > .button").click((e) => {
    const inputValue = e.currentTarget.dataset.value;
    console.log(`inputValue: ${inputValue}`);
    const currentValue = String($("#dialpad input").val() || "");
    console.log(`current: ${currentValue}`);
    $("#dialpad input").val(currentValue + inputValue).focus();
  });
});