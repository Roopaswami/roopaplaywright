import { test, expect } from '@playwright/test';

test('verify chat functionality between two users', async ({ browser }) => {
    const userContext1 = await browser.newContext();
    const userContext2 = await browser.newContext();

    try {
        const user1Page = await userContext1.newPage();
        const user2Page = await userContext2.newPage();

      
        await Promise.all([
            user1Page.goto('https://www.chatzy.com/'),
            user2Page.goto('https://www.chatzy.com/')
        ]);

        // User 1 creates a room
        await user1Page.locator('#X8712').fill('User1');
        await user1Page.locator('#X7728').fill('Testing browsercontexts');        
        await user1Page.locator('#X6434').fill('Test Room');
        await user1Page.locator('//input[@type="submit"]').click();
        await user1Page.waitForTimeout(2000); 
        await user1Page.locator('//input[@type="button"]').click();
    
        await user1Page.waitForTimeout(2000); // Wait for the room to be created
        console.log('User 1 created a room and entered the chat.');

        // Get the room URL
        const roomURL = user1Page.url();

        // User 2 joins the room
        await user2Page.goto(roomURL);
        await user2Page.locator('#X8712').fill('User2');
        await user2Page.locator('#X6668').click();
//      await user1Page.waitForTimeout(2000); 
        console.log('User 2 joined the room.');


        await user1Page.locator('#X9225').fill('Hello from User 1!');
        await user1Page.keyboard.press('Enter');
        await user1Page.waitForTimeout(1000); 
      
        // await expect(user2Page.locator('//p[contains(text(),"user1")]')).toContainText('Hello from User 1!');

        // User 2 responds
        await user2Page.locator('#X9225').fill('Hi User 1, got your message!');
        await user2Page.keyboard.press('Enter');
        await user1Page.waitForTimeout(1000); 

        // Verify User 1 sees the response
        // await expect(user1Page.locator('.message-text')).toContainText('Hi User 1, got your message!');

        await user1Page.locator('#X9225').fill('I just finished the report. How about you?');
        await user1Page.keyboard.press('Enter');
        await user1Page.waitForTimeout(1000); 
        await user2Page.locator('#X9225').fill('I’m just wrapping up some tasks. We should catch up later.');
        await user2Page.keyboard.press('Enter');
        await user1Page.waitForTimeout(1000); 
        // Take screenshots
        await user1Page.screenshot({ path: 'user1-chat.png' });
        await user2Page.screenshot({ path: 'user2-chat.png' });

    } finally {
        await userContext1.close();
        await userContext2.close();
    }
});