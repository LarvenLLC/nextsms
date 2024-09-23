export interface MessagePayload {
  from?: string,
  to: string|string[],
  text: string,
  reference: string,
  date?: string,
  time?: string,
  repeat?: 'hourly'|'daily'|'weekly'|'monthly',
  start_date?: string,
  end_date?: string,
}

export interface MessagesPayload {
  messages: Omit<MessagePayload, "reference">[],
  reference: string,
}

export interface ReportsPayload {
  size?: number,
  sender?: string,
  messageId?: string,
  /**
   * @deprecated will be deprecated in the next minor upgrade
   */
  sentSince?: string,
  /**
   * @deprecated will be deprecated in the next minor upgrade
   */
  sentUntil?: string,
  /**
   * @deprecated use {@link ReportsPayload.messageId} instead
   */
  reference?: string,
}

export interface LogsPayload {
  /**
   * Sender ID name
   */
  from?: string,
  /**
   * Number of results. Maximum allowed is 500
   */
  limit?: number,
  /**
   * To skip a given number of results in the report
   */
  offset?: number,
  /**
   * Destination (Phone number starting with 255)
   */
  to?: string,
  /**
   * Lower limit on date and time of sending SMS
   */
  sentSince?: string,
  /**
   * Upper limit on date and time of sending SMS
   */
  sentUntil?: string,
  /**
   * Special value used when sending a message to associate the sent message with specific values
   */
  reference?: string,
}
