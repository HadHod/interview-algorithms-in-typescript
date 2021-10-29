const worldWord = 'world';

export function hello(world: string = worldWord): string {
  return `Hello ${world}! `;
}
