package com.emojipopup

import android.content.Context
import android.widget.FrameLayout
import androidx.annotation.UiThread
import androidx.emoji2.emojipicker.EmojiPickerView

class EmojiPopupView(context: Context) : FrameLayout(context) {
  private var emojiPickerView = EmojiPickerView(context)
  var onEmojiSelectedListener: ((emoji: String) -> Unit)? = null

  init {
    addView(emojiPickerView, LayoutParams(
      LayoutParams.MATCH_PARENT,
      LayoutParams.MATCH_PARENT
    ))

    emojiPickerView.setOnEmojiPickedListener { emoji ->
      onEmojiSelectedListener?.invoke(emoji.emoji)
    }
  }

  @UiThread
  fun measureAndLayout() {
    measure(
      MeasureSpec.makeMeasureSpec(width, MeasureSpec.EXACTLY),
      MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY)
    )
    layout(left, top, right, bottom)
  }

  override fun requestLayout() {
    super.requestLayout()
      post { measureAndLayout() }
  }
}
