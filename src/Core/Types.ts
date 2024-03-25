export const Types = {
  IDataGateway: Symbol.for('IDataGateway')
} as const

export type Types = typeof Types
