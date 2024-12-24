package main

import "fmt"

func main() {
	fmt.Println(ReverseWords("The quick brown fox jumps over the lazy dog."))
}

func ReverseWords(str string) string {
	rns := []rune(str) // convert to rune
	for i, j := 0, len(rns)-1; i < j; i, j = i+1, j-1 {

		// swap the letters of the string,
		// like first with last and so on.
		rns[i], rns[j] = rns[j], rns[i]
	}

	// return the reversed string.
	return string(rns)
}
