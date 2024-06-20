import { test, expect } from '@playwright/test';
const expectedFileName = 'modern-slavery-and-human-trafficking-statement.pdf';
test('Download PDF File',async ({page,headless}) => {
        await page.goto('https://www.ericsson.com/en');
        // accept cookies
        await page.locator('a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    
        // Scroll to link
        await page.locator('a[title="Link to pdf document"]').scrollIntoViewIfNeeded();

    if(headless){
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('a[title="Link to pdf document"]').click()
        ]);
        console.log(download.suggestedFilename());
        expect(download.suggestedFilename()).toEqual(expectedFileName);

    }
    
        // const dowloadPromise = page.waitForEvent('download');
        // // Click on the link
        // await page.locator('a[title="Link to pdf document"]').click();
        // const download = await dowloadPromise;
    else{
        const[newPage] = await Promise.all([
            page.waitForEvent('load'),
            page.locator('a[title="Link to pdf document"]').click()
        ]);
        newPage.on('response',async (response) => {
            expect(response.headers()['content-type']).toBe('application/pdf')
        })

        await newPage.reload();
    }

});