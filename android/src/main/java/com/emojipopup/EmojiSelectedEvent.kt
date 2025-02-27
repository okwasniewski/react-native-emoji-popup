package com.emojipopup

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.Event
import com.facebook.react.uimanager.events.RCTEventEmitter

class EmojiSelectedEvent(viewTag: Int, private val emoji: String) : Event<EmojiSelectedEvent>(viewTag) {
  override fun getEventName(): String {
    return EVENT_NAME
  }

  override fun canCoalesce(): Boolean {
    return false
  }

  override fun dispatch(rctEventEmitter: RCTEventEmitter) {
    rctEventEmitter.receiveEvent(viewTag, eventName, serializeEventData())
  }

  private fun serializeEventData(): WritableMap {
    val eventData = Arguments.createMap()
    eventData.putString("emoji", emoji)
    return eventData
  }

  companion object {
    const val EVENT_NAME = "topEmojiSelected"
  }

}
