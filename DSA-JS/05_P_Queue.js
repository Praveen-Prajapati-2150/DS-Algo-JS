// enqueue function to add element
// to the queue as per priority
enqueue(element, priority);
{
  // creating object from queue element
  var qElement = new QElement(element, priority);
  var contain = false;

  // iterating through the entire
  // item array to add element at the
  // correct location of the Queue
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].priority > qElement.priority) {
      // Once the correct location is found it is
      // enqueued
      this.items.splice(i, 0, qElement);
      contain = true;
      break;
    }
  }

  // if the element have the highest priority
  // it is added at the end of the queue
  if (!contain) {
    this.items.push(qElement);
  }
}
