#include "flag1.c"
#include <stdio.h>

int main(void) {
    int admin = 0;
    char buffer[16];
    printf("Enter the password: ");
    gets(&buffer);
    if (admin != 0) {
        printf("Welcome!\nYour flag is: ");
        printFlag();
    } else {
        printf("Incorrect password!\n");
    }
    return 0;

}