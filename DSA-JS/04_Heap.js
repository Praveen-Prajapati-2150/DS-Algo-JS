//Heapify
this.maxHeapify = (arr, n, i) => {
  let largest = i;
  let l = 2 * i + 1; //left child index
  let r = 2 * i + 2; //right child index

  //If left child is smaller than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is smaller than smallest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If smallest is not root
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    this.maxHeapify(arr, n, largest);
  }
};
