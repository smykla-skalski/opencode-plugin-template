import assert from "node:assert/strict"
import test from "node:test"
import plugin from "../src/index.ts"

test("registers a working greeting tool", async () => {
  let registered: { execute: (input: unknown) => Promise<{ content: string }> } | undefined
  const ctx = {
    tool: {
      transform(callback: (editor: { add: (tool: typeof registered) => void }) => void) {
        callback({ add: (tool) => { registered = tool } })
      },
    },
  }

  await plugin.setup(ctx as unknown as Parameters<typeof plugin.setup>[0])
  assert.ok(registered)
  assert.equal((await registered.execute({ name: "OpenCode" })).content, "Hello OpenCode!")
})
