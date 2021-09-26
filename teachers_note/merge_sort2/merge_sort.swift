import Foundation

/*
 We're going to define `mergesort` as a global function that accepts an array. We could define this on an extension of a higher type like `RandomAccessCollection` but that makes the algorithm harder to understand.

 Array's `Element` type is defined as a generic type parameter `T` that conforms to `Comparable`
 */
func mergesort<T: Comparable>(_ array: [T]) -> [T] {
    // If the list has zero or one values, there's nothing to sort, so we return it as-is
    if array.count <= 1 { return array }

    // At this point the algorithm is in the recursive portion
    // Determine midpoint of array
    let mid = array.count/2

    // Create left slice of the array and pass through the mergesort function
    let left = mergesort(Array(array[0..<mid]))
    // Create right half slice and pass through the mergesort function
    let right = mergesort(Array(array[mid..<array.count]))

    // Merge the two halves together, and sort them in the process
    // Create a new array to hold the sorted values
    var sorted = Array<T>()
    // To eliminate memory reallocation as `sorted` grows, reserve capacity at the
    // outset to a number of elements equaling the sum of elements in left and right
    sorted.reserveCapacity(left.count + right.count)

    // Move from left to right through the left half of the array,
    // copying values over to `sorted` in the process. This leftIndex
    // variable keeps track of the position in the array
    var leftIndex = 0

    // Move from left to right through the right half of the array and
    // copy values over. Use a separate
    // rightIndex variable to track that position as well
    var rightIndex = 0

    // Keep looping until all of the values in both subarrays
    // are processed.
    while leftIndex < left.count && rightIndex < right.count {
        // Copy the lesser value in to sorted.
        // Test whether the current value on the left side is less than the value on the
        // right side.
        if left[leftIndex] < right[rightIndex] {
            // If the left side value is less, copy to `sorted`
            sorted.append(left[leftIndex])
            // Increment leftIndex to move to next value in left slice
            leftIndex += 1
        } else {
            // Otherwise, copy the current value in right slice to `sorted`
            sorted.append(right[rightIndex])
            // Increment `rightIndex` to move to next value in right slice
            rightIndex += 1
        }
    }

    // At this point one of the two unsorted halves still has a value remaining,
    // and the other is empty. We won't waste time checking which is which.
    // We'll just copy the remainder of both lists over to the sorted list.
    // The one with a value left will add that value, and the empty one will add
    // nothing.
    sorted.append(contentsOf: left[leftIndex..<left.count])
    sorted.append(contentsOf: right[rightIndex..<right.count])

    return sorted
}